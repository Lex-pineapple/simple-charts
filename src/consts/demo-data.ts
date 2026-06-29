type DataPoint = {
  date: string;
  value: number;
};

export const costInfo = [
    { date: "10.06.2026", value: 2.04 },
    { date: "11.06.2026", value: 25.85 },
    { date: "12.06.2026", value: 44.36 },
    { date: "13.06.2026", value: 55.65 },
    { date: "14.06.2026", value: 63.75 },
  ]

export const cpaInfo = [
    { date: "10.06.2026", value: 0.68 },
    { date: "11.06.2026", value: 0.86 },
    { date: "12.06.2026", value: 1.23 },
    { date: "13.06.2026", value: 0.79 },
    { date: "14.06.2026", value: 0.71 },
  ]

export const roiConfirmedInfo = [
    { date: "10.06.2026", value: 610.78 },
    { date: "11.06.2026", value: 180.50 },
    { date: "12.06.2026", value: 161.47 },
    { date: "13.06.2026", value: 56.33 },
    { date: "14.06.2026", value: 357.25 },
  ]

export const conversionsInfo = [
    { date: "10.06.2026", value: 3 },
    { date: "11.06.2026", value: 30 },
    { date: "12.06.2026", value: 36 },
    { date: "13.06.2026", value: 70 },
    { date: "14.06.2026", value: 90 },
  ]

const combineByDate = (datasets: Record<string, DataPoint[]>) => {
    const result = new Map<string, Record<string, number | string>>();

  for (const [key, data] of Object.entries(datasets)) {
    for (const { date, value } of data) {
      if (!result.has(date)) {
        result.set(date, { date });
      }

      result.get(date)![key] = value;
    }
  }

  return Array.from(result.values()).map((item) => {
    for (const key of Object.keys(datasets)) {
      if (!(key in item)) {
        item[key] = 0;
      }
    }

    return item as { date: string } & Record<string, number>;
  });
}

export const data = combineByDate({
  cost: costInfo,
  cpa: cpaInfo,
  roi: roiConfirmedInfo,
  conversions: conversionsInfo,
});