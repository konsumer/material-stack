const {
  Box,
  VBox
} = window.ReactLayout

const {
  Toolbar,
  ToolbarRow,
  ToolbarTitle,
  Typography
} = window.RMWC

const Greeting = () => (
  <VBox fit>
    <Toolbar>
      <ToolbarRow>
        <ToolbarTitle>Toolbar</ToolbarTitle>
      </ToolbarRow>
    </Toolbar>
    <VBox flex={1} className='pad'>
      <Typography use='headline1'>Hello!</Typography>
      <Typography use='headline2'>
        This is a demo of <a href='https://github.com/konsumer/material-stack'>material-stack</a>.
      </Typography>
      <Typography use='body1'>
        View <a href='example.js'>the source</a> to see how to use it.
      </Typography>
    </VBox>
    <Box center className='pad'>
      <Typography use='overline'>Made with &hearts; by <a href='https://github.com/konsumer'>konsumer</a></Typography>
    </Box>
  </VBox>
)

window.ReactDOM.render(<Greeting />, document.getElementById('root'))
