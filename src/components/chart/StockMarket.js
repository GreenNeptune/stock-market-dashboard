import React from 'react'
import theme from '../../theme';
import { Box, Typography } from '@material-ui/core';
import BoxHeader from '../boxHeader/BoxHeader';
import { Line } from 'react-chartjs-2'
import STOCK_MARKET_DATA from '../../DB/StockMarketData'


export default () => {
  const data = {
    datasets: [
      {
        label: "Stock Market",
        fill: true,
        lineTension: 0.1,
        backgroundColor: '#1A3D66',
        borderColor: '#086DDF',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBorderWidth: 1,
        pointHitRadius: 50,
        hoverBackgroundColor: "blue",
        hoverBorderColor: "blue",
        data: [...STOCK_MARKET_DATA]
      }
    ]
  };

  const options = {
    elements: {
      point: {
        radius: 0
      }
    },
    title: {
      display: false,
    },
    legend: {
      display: false
    },
    tooltips: {
      mode: 'index',
      titleFontSize: 0,
      displayColors: false,
      callbacks: {
        label: function (tooltipItems, data) {
          return `$${tooltipItems.yLabel} ${tooltipItems.xLabel}`;
        },
        labelTextColor: function (tooltipItem, chart) {
          return theme.palette.status.info;
        }
      },
    },
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        distribution: 'series',
        time: {
          displayFormats: {
            minute: 'h:mm'
          },
          tooltipFormat: "h:mm",
        },
        gridLines: {
          display: false,
        },
        ticks: {
          maxTicksLimit: 4,
          fontColor: theme.palette.text.primary,
          fontSize: 14,
        }
      }],
      yAxes: [{
        gridLines: {
          color: "white",
        },
        ticks: {
          maxTicksLimit: 5,
          fontColor: theme.palette.text.primary,
          stepSize: 50,
        },
      }]
    }
  }

  return (
    <>
      <BoxHeader display="flex" alignItems="center">
        <Box pr={2} mr='auto' >
          <Typography color="textPrimary">
            BTC-USD-CME
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Box p={1} textAlign="center" color={theme.palette.primary.main} bgcolor={theme.palette.action.selected}>
            1H
        </Box>
          <Box p={1} textAlign="center">
            1D
        </Box>
          <Box p={1} textAlign="center">
            1W
        </Box>
          <Box p={1} textAlign="center">
            1M
        </Box>
        </Box>

      </BoxHeader>
      <Box py={1.5}>
        <Line data={data} options={options} />
      </Box>
    </>
  )
}
