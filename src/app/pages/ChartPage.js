import React, { lazy, useState } from 'react';

const importView = chartName =>
  lazy(() =>
    import(`./charts/${chartName}`).catch(() => import(`./charts/NullChart`))
  );

const data = [
  {
    id: 'php',
    label: 'php',
    value: 372,
    color: 'hsl(233, 70%, 50%)'
  },
  {
    id: 'scala',
    label: 'scala',
    value: 363,
    color: 'hsl(15, 70%, 50%)'
  },
  {
    id: 'go',
    label: 'go',
    value: 597,
    color: 'hsl(79, 70%, 50%)'
  },
  {
    id: 'css',
    label: 'css',
    value: 524,
    color: 'hsl(142, 70%, 50%)'
  },
  {
    id: 'hack',
    label: 'hack',
    value: 514,
    color: 'hsl(198, 70%, 50%)'
  }
];
// handleAddTab = () => {
//   const { tabs } = this.state;

//   const newTabObject = { 
//     name: `Tab ${tabs.length + 1}`,
//     content: <ChartPage/>,
//   };
//  this.props.tabsAdd(newTabObject);
//   this.setState({
//     tabs: [...tabs, newTabObject],
//     currentTab: newTabObject,
//   });
// };

const ChartList = ({ charts }) =>


  
  Object.values(charts).map(Chart => (
    <Chart data={data} />
  ));

  const ChartPage = () => {
  const [charts, setCharts] = useState({});

  const addChart = chartName => {
    // Optional step: Chart is already loaded. Don't load again.
    if (charts[chartName]) return;

    const Chart = importView(chartName);
    setCharts(charts => ({ ...charts, [chartName]: Chart }));
  };
  const loadPieChart = () => addChart('Pie');
  const loadWaffleChart = () => addChart('Waffle');

  return (
    <main>
      <section className="container">
        <button disabled={charts['Pie']} onClick={loadPieChart}>
          Pie Chart
        </button>
        <button disabled={charts['Waffle']} onClick={loadWaffleChart}>
          Waffle Chart
        </button>
      </section>
      <section className="container">
        <React.Suspense fallback="Loading charts...">
          <div className="row">
            <ChartList charts={charts} />
          </div>
        </React.Suspense>
      </section>
    </main>
  );
}


// const mapStateToProps = ({tabs}) => ({
//     tabs
// });
export default ChartPage;
