import { portfolioData as raw } from './data/portfolioData';
import { parsePortfolioData } from './utils/parsePortfolioData';

export const portfolioData = parsePortfolioData(raw);


