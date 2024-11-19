export const PostMessage = async (message) => {
  await fetch("http://localhost:5154/messages", {
    method: "POST",
    body: JSON.stringify({ "posted": new Date(), "text": message }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const GetMessage = async () => {
  const messagePromise = await fetch("http://localhost:5154/messages");
  const messageObj = await messagePromise.json();
  return messageObj;
};
