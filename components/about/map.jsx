import { Box } from "@mui/system";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

export default function AboutMap() {
  return (
    <Box component="div">
      <Box
        sx={{
          position: "absolute",
          top: 0,
        }}
      >
        <iframe
          src="https://www.google.com/maps/d/embed?mid=13yRcu-QUnc8ED6KVLoXbpbSc9e6C71Ew&ehbc=2E312F"
          width="640"
          height="480"
        ></iframe>
      </Box>

      <Box component="nav"
      sx={{display:'flex'

      }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <AccountBalanceOutlinedIcon />
              </ListItemIcon>
            <ListItemText>aaaa</ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

{
  /* <div className={`${style.about_access_box}`}>
              <div>（マップ）</div>
              <button>交通アクセス</button>
              <button>大きい地図で見る</button>
            </div> */
}
