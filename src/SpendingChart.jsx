import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function SpendingChart({ transactions, selectedCategory, onSelectCategory }) {
  const spendingByCategory = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((totals, transaction) => {
      totals[transaction.category] = (totals[transaction.category] || 0) + transaction.amount
      return totals
    }, {})

  const chartData = Object.entries(spendingByCategory)
    .map(([category, amount]) => ({
      name: category,
      value: amount,
    }))
    .sort((a, b) => b.value - a.value)

  const handleBarClick = (data) => {
    const category = data?.payload?.name
    if (category) {
      onSelectCategory(category)
    }
  }

  return (
    <section className="spending-chart">
      <h2>Spending by Category</h2>
      {chartData.length > 0 ? (
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 8, right: 12, left: 8, bottom: 8 }}>
              <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis
                tickFormatter={value => currencyFormatter.format(value)}
                tickLine={false}
                axisLine={false}
                width={72}
              />
              <Tooltip formatter={value => currencyFormatter.format(value)} />
              <Bar
                dataKey="value"
                name="Spending"
                radius={[4, 4, 0, 0]}
                onClick={handleBarClick}
                className="chart-bar"
              >
                {chartData.map(entry => (
                  <Cell
                    key={entry.name}
                    fill={selectedCategory && selectedCategory !== entry.name ? '#bfdbfe' : '#2563eb'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="empty-chart">Add an expense to see category spending.</p>
      )}
    </section>
  )
}

export default SpendingChart
