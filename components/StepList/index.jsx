import { List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function List1() {
  return (
    <Box>
      <List>
        <ListItem sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "20",
              letterSpacing: "10%",
              color: "#26213F",
            }}
          >
            タイトル
          </Typography>
          <Typography>
            説明説明説明説明説明説明説明説明説明説明説明説明
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
}
