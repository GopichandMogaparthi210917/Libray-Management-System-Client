import axios from 'axios';

const fetchData = async (url, method, data = null) => {
  try {
    const response = await axios({ url, method, data });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;
