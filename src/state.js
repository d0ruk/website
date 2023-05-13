import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { toast } from "react-toastify";

export const useStore = create()(
  devtools((set, get) => ({
    contactForm: {
      name: "",
      mail: "",
      subject: "",
      body: "",
    },
    setContactForm: (key, value) =>
      set(state => ({
        contactForm: {
          ...state.contactForm,
          [key]: value,
        },
      })),
    submitContactForm: async () => {
      const data = get().contactForm;

      // await fetch("/joke")
      //   .then(res => res.json())
      //   .then(data => toast.success(data.value))
      //   .catch(err => !isProd && console.table(err));

      console.log({ data });
    },
  })),
);
