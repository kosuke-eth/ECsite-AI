"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Bot, Send, User } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

interface Message {
  role: "assistant" | "user";
  content: string;
}

interface Product {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  price: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "こんにちは！本日のファッションアドバイスをさせていただきます。お探しのアイテムや、ご要望をお聞かせください。",
    },
  ]);
  const [input, setInput] = useState("");
  const [userId, setUserId] = useState("");
  const API_KEY = "app-fpOLi0RCWEj8GgCnutj6go0a";
  const API_URL = "https://api.dify.ai/v1/chat-messages";

  const recommendedProducts: Product[] = [
    {
      id: "1",
      imageUrl: "https://via.placeholder.com/150", // サンプル画像
      name: "バーガンディ色のリブニット",
      description: "デコルテを美しく見せるやや広めのネックライン。",
      price: "¥5,000",
    },
    {
      id: "2",
      imageUrl: "https://via.placeholder.com/150", // サンプル画像
      name: "ダークブラウンのフレアスカート",
      description: "動きに合わせて揺れるシルエットが魅力的なスカート。",
      price: "¥8,000",
    },
    {
      id: "3",
      imageUrl: "https://via.placeholder.com/150", // サンプル画像
      name: "ベージュのトレンチコート",
      description: "少し肌寒い日に羽織れるクラシックなコート。",
      price: "¥12,000",
    },
  ];

  useEffect(() => {
    setUserId(uuidv4());
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          user: userId,
          query: input,
          inputs: newMessages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("APIエラー詳細:", errorData);
        throw new Error(`APIエラー: ${errorData.message}`);
      }

      const data = await response.json();
      const assistantMessage = formatMessage(data.answer || "AIからの返答がありません。");

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantMessage },
      ]);
    } catch (error) {
      console.error("エラー:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "申し訳ありません。応答の取得に失敗しました。" },
      ]);
    }

    setInput("");
  };

  const formatMessage = (content: string): string => {
    return content
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // **text** → <b>text</b>
      .replace(/\*(.*?)\*/g, "<i>$1</i>") // *text* → <i>text</i>
      .replace(/\n/g, "<br />"); // 改行 → <br />
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col h-[600px]">
          {/* ヘッダー */}
          <div className="p-4 border-b">
            <h2 className="text-2xl font-semibold">AIスタイリスト</h2>
            <p className="text-sm text-muted-foreground">
              あなたの好みに合わせたファッションアドバイスを提供します
            </p>
          </div>

          {/* チャットエリア */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 ${
                    message.role === "user" ? "justify-end" : ""
                  }`}
                >
                  {/* アバター */}
                  {message.role === "assistant" && (
                    <Avatar>
                      <Bot className="h-5 w-5" />
                    </Avatar>
                  )}
                  <div
                    className={`rounded-lg p-3 max-w-[80%] ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                    dangerouslySetInnerHTML={{ __html: message.content }} // HTMLを直接レンダリング
                  />
                  {message.role === "user" && (
                    <Avatar>
                      <User className="h-5 w-5" />
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* 入力フォーム */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="メッセージを入力..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* おすすめ商品セクション */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">おすすめ商品</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendedProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 bg-white shadow-sm"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="font-semibold text-lg">{product.name}</h4>
              <p className="text-sm text-gray-500">{product.description}</p>
              <p className="font-bold text-primary mt-2">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

