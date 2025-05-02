"use client"
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 100);
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xdkepdkz" // remplace par ton lien Formspree
      method="POST"
      className="w-full p-6 bg-white/95 border border-gray-300 rounded-lg shadow space-y-4 mt-7"
    >
      <h2 className="text-xl font-bold text-center xl:text-2xl xl:font-semibold">Envoyez un e-mail</h2>

      <div>
        <Label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left">
          Nom
        </Label>
        <Input
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          required
          className="mt-2 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
          Email
        </Label>
        <Input
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <Label htmlFor="message" className="block text-sm font-medium text-gray-700 text-left">
          Message
        </Label>
        <Textarea
          onChange={handleChange}
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 min-h-[100px]"
        />
      </div>

      {/* Anti-spam hidden field */}
      <Input type="text" name="_gotcha" className="hidden" />
      <Input type="hidden" name="_subject" value="📬 Nouveau message depuis mon portfolio !" />

      <Button
        type="submit"
        className="w-full text-white py-2 px-4 rounded-lg transition cursor-pointer"
      >
        Envoyer
      </Button>
    </form>
  );
}