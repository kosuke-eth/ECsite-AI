"use client";

import { useState } from "react";
import { Bot, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AIAssistantPreview() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "こんにちは！本日はどのようなスタイルをお探しですか？" },
  ]);
  const [input, setInput] = useState("");
  const API_KEY = "app-fpOLi0RCWEj8GgCnutj6go0a";
  const API_URL = "https://api.dify.ai/v1/chat-messages";

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          inputs: [{ role: "user", content: input }], // 必須フィールド
          user: "user-12345", // 必須フィールド: 任意のユーザーID
          query: input, // 通常は必要なフィールド
        }),
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("Dify API Response Error:", errorDetails);
        throw new Error(`Failed to fetch response: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = {
        sender: "bot",
        text: data.outputs?.[0]?.content || "回答を取得できませんでした。",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error communicating with Dify API:", error);
      const errorMessage = { sender: "bot", text: "エラーが発生しました。もう一度お試しください。" };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setInput("");
    }
  };

  return (
    <section className="py-12 bg-muted rounded-lg">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              AIファッションデザイナーと相談
            </h2>
            <p className="text-muted-foreground mb-6">
              好みや体型、ライフスタイルに基づいて、あなた専用のファッションアドバイスを提供します。
            </p>
          </div>
          <div className="relative">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${
                      message.sender === "user" ? "justify-end" : ""
                    }`}
                  >
                    {message.sender === "bot" && (
                      <div className="flex-shrink-0">
                        <Bot className="w-6 h-6" />
                      </div>
                    )}
                    <p
                      className={`text-sm p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {message.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex">
                <input
                  type="text"
                  className="flex-grow p-2 border rounded-l-lg"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="メッセージを入力..."
                />
                <Button
                  size="lg"
                  className="rounded-r-lg"
                  onClick={handleSendMessage}
                >
                  送信
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

