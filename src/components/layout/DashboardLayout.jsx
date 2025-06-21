"use client";

import React from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  CssBaseline,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Message as MessageIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import useAppStore from "@/store/appStore";
import { useResponsive } from "@/utils";
import useTranslation from "@/hooks/useTranslation";
import Sidebar from "./Sidebar";
import ChatBar from "./ChatBar";

function DashboardLayout() {
  const theme = useTheme();
  const { isMobile } = useResponsive();
  const { sidebarCollapsed, chatVisible, setSidebarCollapsed, setChatVisible } =
    useAppStore();
  const { t, changeLanguage, i18n, dir } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageChange = (lng) => {
    changeLanguage(lng);
    setAnchorEl(null);
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "he", label: "Hebrew" },
    { code: "ar", label: "Arabic" },
  ];

  const isRTL = dir === "rtl";

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        direction: dir,
      }}
    >
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          direction: dir,
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle sidebar"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            edge="start"
            sx={{ mr: isRTL ? 0 : 2, ml: isRTL ? 2 : 0 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {t("dashboard")}
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => setChatVisible(!chatVisible)}
            sx={{ mr: isRTL ? 2 : 0, ml: isRTL ? 0 : 2 }}
          >
            <MessageIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-controls="language-menu"
            aria-haspopup="true"
            onClick={handleLanguageClick}
          >
            <LanguageIcon />
          </IconButton>
          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            {languages.map((lang) => (
              <MenuItem
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                selected={i18n.language === lang.code}
              >
                {lang.label}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>

      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        isRTL={isRTL}
        t={t}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          width: "100vw",
          overflow: "auto",
          pt: 8,
          ml: isRTL ? 0 : sidebarCollapsed ? "80px" : "280px",
          mr: isRTL
            ? sidebarCollapsed
              ? "80px"
              : "280px"
            : chatVisible
            ? "320px"
            : "60px",
          transition: "margin 0.3s ease",
          direction: dir,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box sx={{ p: 4 }}>
          <Outlet />
        </Box>
      </Box>

      <ChatBar
        collapsed={!chatVisible}
        onToggle={() => setChatVisible(!chatVisible)}
        isRTL={isRTL}
        t={t}
      />
    </Box>
  );
}

export default DashboardLayout;
