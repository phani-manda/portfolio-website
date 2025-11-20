import { portfolioData as raw } from './mock';
import { parsePortfolioData } from './utils/parsePortfolioData';

export const portfolioData = parsePortfolioData(raw);


