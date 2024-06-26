// temp range 0 - 2
/*Temperature is a scaling factor that determines how likely the model is to produce a specific output. A higher temperature value makes the model more likely to produce diverse, creative, and sometimes unexpected results. A lower temperature value makes the model more likely to produce conservative, predictable, and "safer" results. */

import dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "gpt-3.5-turbo-instruct",
      prompt: `Summarize this \n${text}`,
      max_tokens: 500,
      temperature: 0,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

export const jsconverterController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.createCompletion({
      model: "gpt-3.5-turbo-instruct",
      prompt: `/* convert these instruction into javascript code \n${text}`,
      max_tokens: 400,
      temperature: 0.25,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};
