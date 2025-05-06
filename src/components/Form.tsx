"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function Form() {
  const [sendEmail, setSendEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xdkepdkz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setSendEmail(true);
      }
    } catch (error) {
      console.error("Erreur d'envoi :", error);
    }
  };

  useEffect(() => {
    if (sendEmail) {
      setTimeout(() => {
        setSendEmail(false);
      }, 1500);
    }
  }, [sendEmail]);

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mt-7 w-full space-y-4 overflow-hidden rounded-lg border border-gray-300 p-6"
    >
      <h2 className="text-center text-xl font-bold xl:text-2xl xl:font-semibold">
        Envoyez un e-mail
      </h2>

      <div>
        <Label
          htmlFor="name"
          className="block text-left text-sm font-medium text-gray-700"
        >
          Nom
        </Label>
        <Input
          value={formData.name}
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          required
          className="mt-2 block w-full rounded border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <Label
          htmlFor="email"
          className="block text-left text-sm font-medium text-gray-700"
        >
          Email
        </Label>
        <Input
          value={formData.email}
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 block w-full rounded border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <Label
          htmlFor="message"
          className="block text-left text-sm font-medium text-gray-700"
        >
          Message
        </Label>
        <Textarea
          value={formData.message}
          onChange={handleChange}
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 block min-h-[100px] w-full rounded border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Anti-spam hidden field */}
      <Input type="text" name="_gotcha" className="hidden" />
      <Input
        type="hidden"
        name="_subject"
        value="📬 Nouveau message depuis mon portfolio !"
      />

      <Button
        type="submit"
        className="w-full cursor-pointer rounded-lg px-4 py-2 text-white transition"
      >
        Envoyer
      </Button>

      {sendEmail && (
        <div className="msg-form absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-slate-200/70 px-4 py-2 text-center text-green-500">
          Votre message a bien été envoyé
        </div>
      )}
    </form>
  );
}
