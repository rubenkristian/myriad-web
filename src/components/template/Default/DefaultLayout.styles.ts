import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 30px',
    },
    firstCol: {
      width: 312,

      [theme.breakpoints.down(1346)]: {
        width: 290,
      },
    },

    innerFirstColWrapper: {
      width: 312,
      display: 'flex',
      flexDirection: 'column',
      rowGap: 12,

      [theme.breakpoints.down(1346)]: {
        width: 290,
      },
    },

    secondCol: {
      flexGrow: 2,
      maxWidth: 644,
      margin: `0 20px`,

      [theme.breakpoints.down(1346)]: {
        maxWidth: 600,
      },
    },

    innerSecondColWrapper: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignItems: 'center',
      rowGap: 12,
      '& > div': {
        width: '100%',
      },
    },

    thirdCol: {
      width: 312,

      [theme.breakpoints.down(1346)]: {
        width: 290,
      },
    },

    innerThirdColWrapper: {
      width: 312,
      display: 'flex',
      flexDirection: 'column',
      rowGap: theme.spacing(1),

      [theme.breakpoints.down(1346)]: {
        width: 290,
      },
    },
  }),
);

export default useStyles;