import { Box } from "@mui/material";

export const Nav = () => {
  return (
    <Box component="ul" sx={{ display: "flex" }}>
      <Box component="li">体験プログラム</Box>
      <Box component="li">企画展・イベント</Box>
      <Box component="li">入居者紹介</Box>
      <Box component="li"></Box>
      ご利用案内
    </Box>
  );
};
export default Nav;
