import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class QaService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://open-ai21.p.rapidapi.com',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'f570367049msh92d23c8fda1a817p1b03cfjsne8957d93c6e0',
        'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
      }
    });
  }

  public async askQuestion(question: string, context: string): Promise<any> {
    const options: AxiosRequestConfig = {
      method: 'POST',
      url: '/qa',
      data: {
        question,
        context
      }
    };

    try {
      const response: AxiosResponse = await this.axiosInstance.request(options);
      return response.data;
    } catch (error) {
      throw new Error(`Error asking question: ${error}`);
    }
  }
}

export default new QaService();

export {};
