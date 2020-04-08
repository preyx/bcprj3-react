import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
// import Divider from '@material-ui/core/Divider'
// import InboxIcon from '@material-ui/icons/Inbox'
// import DraftsIcon from '@material-ui/icons/Drafts'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
// import { useChatContext } from '../../utils/GlobalState'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: '4em 0'
  }
}))

export default function Home (props) {
  // const [state, dispatch] = useChatContext()
  const classes = useStyles()
  // const [selectedIndex, setSelectedIndex] = React.useState(1)

  // const handleListItemClick = (event, index) => {
  //   setSelectedIndex(index)
  // }

  return (
    <Container component='main' maxWidth='m'>
      <Paper style={{ maxHeight: '100%', overflow: 'auto' }}>
        <div className={classes.root}>
          {/* <List component='nav' aria-label='main mailbox folders'>
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Inbox' />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary='Drafts' />
          </ListItem>
        </List>
        <Divider /> */}
          <List component='chat' aria-label='chatbox'>
            {/* {this.props.messages.map(message => {
              return(
                <ListItem>
                  <ListItemText primary={message} />
                </ListItem>
              )
            })} */}
            state.items.map(({ __id, messageText }) => (
            <ListItem>
              <ListItemText primary={messageText} />
            </ListItem>
            ))
            <ListItem>
              <ListItemText primary='Message1 <img src="https://static-cdn.jtvnw.net/emoticons/v1/440/1.0"/>' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message2' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message1' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message2' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message1' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message2' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message1' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message2' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message1' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message2' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message1' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message2' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message1' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message2' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message1' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message2' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message1' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message2' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message1' />
            </ListItem>
            <ListItem>
              <ListItemText primary='Message2' />
            </ListItem>
          </List>
        </div>
      </Paper>
    </Container>
  )
}
