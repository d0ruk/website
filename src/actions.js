import { action } from "alfa";
import { toast } from "react-toastify";

const isProd = process.env.mode === "production";

export const sendMail = action(
  async ({ name, mail, subject, body }) => {
    fetch("/.netlify/functions/joke")
      .then(res => res.json())
      .then(data => toast.success(data.value))
      .catch(err => !isProd && console.table(err));

    console.log("submitting: ", { name, mail, subject, body });
  },
  ["name", "mail", "subject", "body"],
);
