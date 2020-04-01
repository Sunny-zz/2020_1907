import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';


const MaterialUiDemo = (props) => {
  const [open, setOpen] = React.useState(false);
  // 创建了一个 hook
  // 创建了一个 state 叫 open 并且创建好了修改 open state 的方法 setOpen 而且 open 的默认值是 false
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return <div>
    <Button onClick={() => setOpen(!open)} variant="contained" color="primary">
      {open ? '你好,世界' : '你好'}
    </Button>
    <AccessAlarm />
    <ThreeDRotation />
    <hr />
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Open alert dialog
    </Button>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
          </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { handleClose(); console.log('不同意的别的事') }} color="primary">
          Disagree
          </Button>
        <Button onClick={() => { handleClose(); console.log('同意的别的事，确定使用') }} color="primary" autoFocus>
          Agree
          </Button>
      </DialogActions>
    </Dialog>
  </div>
}
export default MaterialUiDemo