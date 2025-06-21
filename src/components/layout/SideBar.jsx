"use client";

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  Divider,
  IconButton,
  Chip,
  Collapse,
} from "@mui/material";
import {
  Analytics as AnalyticsIcon,
  AccountBalance as FinanceIcon,
  CurrencyBitcoin as CryptoIcon,
  FolderOpen as ProjectIcon,
  Image as ImageIcon,
  School as AcademyIcon,
  CalendarToday as CalendarIcon,
  Message as MessageIcon,
  Contacts as ContactsIcon,
  ShoppingCart as EcommerceIcon,
  Folder as FileIcon,
  Help as HelpIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
  AutoAwesome as SparkleIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const dashboardItems = [
  { title: "Project", icon: ProjectIcon, path: "/projects", key: "project" },
  {
    title: "Analytics",
    icon: AnalyticsIcon,
    path: "/analytics",
    key: "analytics",
  },
  { title: "Finance", icon: FinanceIcon, path: "/finance", key: "finance" },
  { title: "Crypto", icon: CryptoIcon, path: "/crypto", key: "crypto" },
];

const applicationItems = [
  {
    title: "AI Image Generator",
    icon: ImageIcon,
    path: "/ai-generator",
    badge: "NEW",
    key: "aiGenerator",
  },
  { title: "Academy", icon: AcademyIcon, path: "/academy", key: "academy" },
  {
    title: "Calendar",
    icon: CalendarIcon,
    path: "/calendar",
    subtitle: "3 upcoming events",
    key: "calendar",
  },
  {
    title: "Messenger",
    icon: MessageIcon,
    path: "/messenger",
    key: "messenger",
  },
  { title: "Contacts", icon: ContactsIcon, path: "/contacts", key: "contacts" },
  {
    title: "E-Commerce",
    icon: EcommerceIcon,
    path: "/ecommerce",
    key: "ecommerce",
  },
  { title: "File Manager", icon: FileIcon, path: "/files", key: "fileManager" },
  { title: "Help Center", icon: HelpIcon, path: "/help", key: "helpCenter" },
  { title: "Mail", icon: MailIcon, path: "/mail", badge: "23", key: "mail" },
];

const Sidebar = ({ collapsed, onToggle, isRTL, t }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [hovering, setHovering] = useState(false);
  const [expandedSections, setExpandedSections] = useState(["applications"]);

  const isExpanded = !collapsed || hovering;

  const handleItemClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const renderMenuItem = (item, isActive) => (
    <ListItem key={item.title} disablePadding>
      <ListItemButton
        onClick={() => handleItemClick(item.path)}
        sx={{
          minHeight: 48,
          px: 2.5,
          backgroundColor: isActive
            ? `${theme.palette.success.main}20`
            : "transparent",
          borderLeft:
            isRTL && isActive
              ? `3px solid ${theme.palette.success.main}`
              : "none",
          borderRight:
            !isRTL && isActive
              ? `3px solid ${theme.palette.success.main}`
              : "none",
          "&:hover": {
            backgroundColor: `${theme.palette.action.hover}`,
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: isExpanded && !isRTL ? 3 : "auto",
            ml: isExpanded && isRTL ? 3 : "auto",
            justifyContent: "center",
            color: isActive
              ? theme.palette.success.main
              : theme.palette.text.secondary,
          }}
        >
          <item.icon />
        </ListItemIcon>
        {isExpanded && (
          <>
            <ListItemText
              primary={t(item.key) || item.title}
              secondary={item.subtitle}
              primaryTypographyProps={{
                fontSize: "14px",
                color: isActive
                  ? theme.palette.success.main
                  : theme.palette.text.primary,
              }}
              secondaryTypographyProps={{
                fontSize: "12px",
                color: theme.palette.text.secondary,
              }}
            />
            {item.badge && (
              <Chip
                label={item.badge}
                size="small"
                sx={{
                  height: "20px",
                  fontSize: "10px",
                  backgroundColor:
                    item.badge === "NEW"
                      ? theme.palette.success.main
                      : theme.palette.error.main,
                  color: "white",
                }}
              />
            )}
          </>
        )}
      </ListItemButton>
    </ListItem>
  );

  return (
    <Box
      sx={{
        width: isExpanded ? 280 : 80,
        flexShrink: 0,
        position: "fixed",
        left: isRTL ? "auto" : 0,
        right: isRTL ? 0 : "auto",
        top: 0,
        height: "100vh",
        backgroundColor: theme.palette.primary.main,
        borderRight: !isRTL ? `1px solid ${theme.palette.divider}` : "none",
        borderLeft: isRTL ? `1px solid ${theme.palette.divider}` : "none",
        transition: "width 0.3s ease",
        zIndex: 1200,
        overflow: "hidden",
        direction: isRTL ? "rtl" : "ltr",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          minHeight: 64,
          flexShrink: 0,
        }}
      >
        <IconButton
          onClick={onToggle}
          sx={{
            color: theme.palette.success.main,
            mr: isRTL ? 0 : 1,
            ml: isRTL ? 1 : 0,
          }}
        >
          <MenuIcon />
        </IconButton>
        {isExpanded && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                backgroundColor: theme.palette.success.main,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SparkleIcon sx={{ color: "white", fontSize: 20 }} />
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.success.main,
                  fontWeight: "bold",
                  lineHeight: 1,
                }}
              >
                FUSE
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: theme.palette.success.main, lineHeight: 1 }}
              >
                REACT
              </Typography>
            </Box>
          </Box>
        )}
      </Box>

      <Divider sx={{ borderColor: theme.palette.divider, flexShrink: 0 }} />

      {/* Navigation - Scrollable */}
      <Box
        sx={{
          flexGrow: 1,
          overflow: "auto",
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.divider,
            borderRadius: "3px",
          },
        }}
      >
        {/* Dashboards Section */}
        <Box sx={{ p: 2 }}>
          {isExpanded && (
            <>
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.success.main,
                  fontWeight: "bold",
                  mb: 1,
                  display: "block",
                }}
              >
                {t("dashboards") || "DASHBOARDS"}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 2,
                  display: "block",
                }}
              >
                {t("uniqueDashboardDesigns") || "Unique dashboard designs"}
              </Typography>
            </>
          )}
          <List disablePadding>
            {dashboardItems.map((item) => {
              const isActive = location.pathname === item.path;
              return renderMenuItem(item, isActive);
            })}
          </List>
        </Box>

        {/* Applications Section */}
        <Box sx={{ p: 2 }}>
          {isExpanded && (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  mb: 1,
                }}
                onClick={() => toggleSection("applications")}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: theme.palette.success.main,
                    fontWeight: "bold",
                    flexGrow: 1,
                  }}
                >
                  {t("applications") || "APPLICATIONS"}
                </Typography>
                {expandedSections.includes("applications") ? (
                  <ExpandLess sx={{ color: theme.palette.success.main }} />
                ) : (
                  <ExpandMore sx={{ color: theme.palette.success.main }} />
                )}
              </Box>
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 2,
                  display: "block",
                }}
              >
                {t("customApplicationDesigns") ||
                  "Custom made application designs"}
              </Typography>
            </>
          )}
          <Collapse
            in={isExpanded && expandedSections.includes("applications")}
            timeout="auto"
            unmountOnExit
          >
            <List disablePadding>
              {applicationItems.map((item) => {
                const isActive = location.pathname === item.path;
                return renderMenuItem(item, isActive);
              })}
            </List>
          </Collapse>
        </Box>
      </Box>

      {/* Footer */}
      {isExpanded && (
        <Box
          sx={{
            p: 2,
            borderTop: `1px solid ${theme.palette.divider}`,
            flexShrink: 0,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: theme.palette.text.secondary,
              mb: 1,
              display: "block",
            }}
          >
            {t("needAssistance") || "Need assistance to get started?"}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: theme.palette.success.main,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {t("viewDocumentation") || "View documentation"} →
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: 2,
              p: 1,
              borderRadius: 1,
              "&:hover": { backgroundColor: theme.palette.action.hover },
            }}
          >
            <Avatar
              src="/placeholder.svg?height=40&width=40"
              alt="Abbott Keith"
              sx={{ width: 40, height: 40 }}
            />
            <Box>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.primary, lineHeight: 1.2 }}
              >
                Abbott Keith
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: theme.palette.text.secondary, lineHeight: 1.2 }}
              >
                admin@fusetheme.com
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
