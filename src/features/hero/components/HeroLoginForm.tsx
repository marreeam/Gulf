"use client";

import React, { useState } from "react";
import { Checkbox } from "@headlessui/react";
import Button from "@/components/ui/Button";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login attempted:", { username, password, remember });
  };

  return (
    <div className="flex items-center justify-center lg:items-start lg:pt-12 border border-gray-200 rounded-4xl">
      <div className="w-full max-w-md rounded-3xl bg-white p-8">
        <h2 className="mb-8  bold-medium-text">ავტორიზაცია</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <input
              type="text"
              placeholder="მომხმარებლის სახელი"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 px-6 text-base placeholder:text-gray-400 focus:border-gray-300 focus:bg-white"
            />
          </div>

          <div className="space-y-2">
            <input
              type="password"
              placeholder="პაროლი"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 px-6 text-base placeholder:text-gray-400 focus:border-gray-300 focus:bg-white"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={remember}
              onChange={setRemember}
              className="h-5 w-5 rounded border border-gray-300 bg-white focus:ring-2 focus:ring-slate-500"
            />
            <label className="text-sm font-medium text-gray-700 cursor-pointer">
              დამახსოვრება
            </label>
          </div>
          <Button
            variant="dark"
            type="submit"
          >
            შესვლა
          </Button>

          <div className="text-center">
            <Button
              variant="light"
              type="button"
            >
              ბარათის შეკვეთა
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
