import { ButtonBase, List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function ImageList() {
  return (
    <Box>
      <Box>
          <Box sx={{ }}>
            <Image src="/../public/item.jpeg" width={363.74} height={238.99}/>
            <Typography component="p">焼き物</Typography>
            <Typography component="p">2F 体験工房1</Typography>
            <Typography variant="h3">入居者名入居者名入居者名</Typography>
            <Typography component="p">
              短い説明文短い説明文短い説明文短い説明文短い説明文短い説明文短い説明文
            </Typography>
          </Box>
      </Box>
    </Box>
  );
}

// 画像はNextImageを使うこと
// タイトルは<Typography>のh3を使うこと
// スタイルの定義はsxを使うこと
// リンクは<ButtonBase> をつかってクリックエフェクトを表現すること
