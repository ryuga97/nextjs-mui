import { List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function ColList1() {
  return (
    <Box
      sx={{
        width: 1101.28,
        height: 450.55,
        bgcolor: "#E5E5E5",
        counterReset: "number 0",
        display: "flex",
      }}
    >
      <List sx={{ display: "flex", alignItems: "center", }}>
        <ListItem sx={{ display: "flex", flexDirection: "column",  }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: 18,
              letterSpacing: "20%",
              color: "#000",
              fontWeight:"bold",
              "&:before": {
                counterIncrement: "number 1",
              },
            }}
          >
            自身のPRの場として
          </Typography>
          <Typography component="p" sx={{ mt: "39.5px" }}>
            当ウェブサイトには『工芸従事者データベース』が掲載されています。各個人のページとなっていて、作品や工房所在地などを公開することができます。自分自身のPRの場としてお使いください。
          </Typography>
        </ListItem>

        <ListItem sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: 18,
              letterSpacing: "20%",
              color: "#000",
              fontWeight:"bold",
              "&:before": {
                counterIncrement: "number 1",
              },
            }}
          >
            自身のPRの場として
          </Typography>
          <Typography component="p" sx={{ mt: "39.5px", }}>
            当ウェブサイトには『工芸従事者データベース』が掲載されています。各個人のページとなっていて、作品や工房所在地などを公開することができます。自分自身のPRの場としてお使いください。
          </Typography>
        </ListItem>

        <ListItem sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: 18,
              letterSpacing: "20%",
              color: "#000",
              fontWeight:"bold",
              "&:before": {
                counterIncrement: "number 1",
              },
            }}
          >
            自身のPRの場として
          </Typography>
          <Typography component="p" sx={{ mt: "39.5px" }}>
            当ウェブサイトには『工芸従事者データベース』が掲載されています。各個人のページとなっていて、作品や工房所在地などを公開することができます。自分自身のPRの場としてお使いください。
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
}

// ナンバリングは自動付与
// 最大横幅はデザイン通りに指定
// 3カラム固定でflex-wrap: wrapで
// スタイルの定義はsxを使うこと
// タイトル部分は<Typography>のh3を使うこと
