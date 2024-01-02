import { useTheme } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo';
//geography map set
//https://github.com/plouc/nivo/blob/master/website/src/data/components/geo/world_countries.json?short_path=f03ddc9
import useMediaQuery from '@mui/material/useMediaQuery';
import { geoFeatures } from '../data/mockGeoFeatures';
import { tokens } from '../theme';
import { mockGeographyData as data } from '../data/mockData';

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery('(min-width: 800px)');

  return (
    <ResponsiveChoropleth
      data={data}
      //'theme' chage heigh level default obj setting
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      features={geoFeatures.features}
      // colors="nivo"
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      //zoom-in & zoom-out size in different page
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#fff"
      // enableGraticule={true}
      // graticuleLineColor="#dddddd"
      legends={
        isDashboard || !isNonMobile
          ? undefined
          : [
              {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#fff',
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
      }
    />
  );
};

export default GeographyChart;
