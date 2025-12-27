import React, { useState } from "react";
import Input from "./Input";
import { encryptPayload } from "../utils/helperFunction";

export default function Message() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData?.email.trim() === "" ||
      formData?.fullname.trim() === "" ||
      formData?.message.trim() === ""
    ) {
      return;
    }
    setLoading(true);
    try {
      const payload = {
        fullName: formData.fullname,
        email: formData.email,
        message: formData.message,
      };

      const encryptedData = await encryptPayload(
        payload,
        import.meta.env.VITE_CONTACT_SECRET_KEY
      );

      console.log(encryptedData);

      const res = await fetch(
        "https://us-central1-incase-7345f.cloudfunctions.net/contactUs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_CONTACT_API_KEY,
          },
          body: JSON.stringify({ encryptedData }),
        }
      );

      if (!res.ok) throw new Error("Failed to send message");

      console.log("test sent");
      setFormData({ fullname: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      console.log("test failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <Input
        name="fullname"
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
        value={formData.fullname}
        onChange={handleChange}
      />

      <Input
        name="email"
        label="Email Address"
        type="email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={handleChange}
      />

      <Input
        message
        name="message"
        label="Message"
        placeholder="Type your message here..."
        value={formData.message}
        onChange={handleChange}
      />

      <button
        disabled={loading}
        className="w-full text-white bg-dark py-4.5 rounded-full mt-5 cursor-pointer"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
