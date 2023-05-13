export const isEmail = str => /(\S+)@(\S+)\.(\S+)/.test(str);

export const isProd = process.env.mode === "production";
