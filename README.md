| 🔢 Module | Name                                  | What It Does                                            | Output You’ll See                        |       |                                 |
| --------- | ------------------------------------- | ------------------------------------------------------- | ---------------------------------------- | ----- | ------------------------------- |
| 1️⃣       | **Live Price Fetcher**                | Fetch stock/index prices every 5–15 mins from Yahoo/NSE | Console log or API: `reliance → ₹2901`   |       |                                 |
| 2️⃣       | **News Fetcher + Sentiment Analyzer** | Get headlines + score them using FinBERT/VADER          | JSON like: `"Tata EV Export" → +0.73`    |       |                                 |
| 3️⃣       | **Technical Indicator Engine**        | Calculate RSI, EMA, MACD from price data                | JSON like: `RSI: 58, 50 EMA: 1450`       |       |                                 |
| 4️⃣       | **Signal Generator**                  | Combine sentiment + indicators → Buy/Sell signals       | JSON: \`"Buy HDFC                        | Swing | Reason: News + EMA crossover"\` |
| 5️⃣       | **Backend API Server**                | Expose `/api/signals` + `/api/news` etc.                | Can test with Postman or in browser      |       |                                 |
| 6️⃣       | **Frontend (React UI)**               | Show daily signals in a dashboard                       | Full UI: Cards, filters, charts          |       |                                 |
| 7️⃣       | **Notification System**               | Telegram bot or Firebase for alerts                     | You’ll get real alerts: “Buy Infosys 🔔” |       |                                 |
| 8️⃣       | **Deployment**                        | Host backend (Render) + frontend (Vercel)               | Live link: `yourproject.vercel.app`      |       |                                 |
