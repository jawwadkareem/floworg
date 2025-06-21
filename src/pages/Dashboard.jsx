"use client";

import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Button,
  Chip,
} from "@mui/material";
import { Warning, Message, Settings, ExpandMore } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

const statsCards = [
  {
    title: "Today",
    value: "25",
    subtitle: "Due Tasks",
    completed: "Completed: 7",
    color: "#3CCBAF",
    key: "dueTasks",
  },
  {
    title: "Overdue",
    value: "4",
    subtitle: "Tasks",
    completed: "Yesterday's overdue: 2",
    color: "#D36433",
    key: "overdueTasks",
  },
  {
    title: "Issues",
    value: "32",
    subtitle: "Open",
    completed: "Closed today: 0",
    color: "#3966C8",
    key: "openIssues",
  },
  {
    title: "Features",
    value: "42",
    subtitle: "Proposals",
    completed: "Implemented: 8",
    color: "#5A7285",
    key: "proposals",
  },
];

function Dashboard() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", maxWidth: "none" }}>
      {/* Breadcrumb */}
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.secondary }}
        >
          {t("home")} / {t("dashboards")} / {t("project")}
        </Typography>
      </Box>

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Avatar
            src="/placeholder.svg?height=60&width=60"
            alt="Abbott Keith"
            sx={{ width: 60, height: 60 }}
          />
          <Box>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: "bold",
                mb: 1,
              }}
            >
              {t("welcomeBack", { name: "Abbott Keith" }) ||
                "Welcome back, Abbott Keith!"}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Warning
                sx={{ color: theme.palette.text.secondary, fontSize: 16 }}
              />
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                {t("newMessagesAndTasks") ||
                  "You have 2 new messages and 15 new tasks"}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<Message />}
            sx={{
              backgroundColor: theme.palette.success.main,
              "&:hover": { backgroundColor: "#2FB89E" },
            }}
          >
            {t("messages") || "Messages"}
          </Button>
          <Button
            variant="outlined"
            startIcon={<Settings />}
            sx={{
              borderColor: theme.palette.text.secondary,
              color: theme.palette.text.secondary,
              "&:hover": {
                borderColor: theme.palette.text.primary,
                color: theme.palette.text.primary,
              },
            }}
          >
            {t("settings") || "Settings"}
          </Button>
        </Box>
      </Box>

      {/* Project Selector */}
      <Box sx={{ mb: 3 }}>
        <Button
          variant="outlined"
          endIcon={<ExpandMore />}
          sx={{
            borderColor: theme.palette.text.secondary,
            color: theme.palette.text.secondary,
            "&:hover": {
              borderColor: theme.palette.text.primary,
              color: theme.palette.text.primary,
            },
            textTransform: "none",
          }}
        >
          ACME Corp. Backend App
        </Button>
      </Box>

      {/* Navigation Tabs */}
      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        {["Home", "Budget", "Team"].map((tab, index) => (
          <Button
            key={tab}
            variant={index === 0 ? "contained" : "text"}
            sx={{
              backgroundColor:
                index === 0 ? theme.palette.success.main : "transparent",
              color: index === 0 ? "white" : theme.palette.text.secondary,
              "&:hover": {
                backgroundColor:
                  index === 0 ? "#2FB89E" : theme.palette.action.hover,
              },
              textTransform: "none",
            }}
          >
            {t(tab.toLowerCase()) || tab}
          </Button>
        ))}
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4, width: "100%" }}>
        {statsCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[2],
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    {t(card.key) || card.title}
                  </Typography>
                  <Button
                    size="small"
                    sx={{
                      color: theme.palette.text.secondary,
                      minWidth: "auto",
                      p: 0.5,
                    }}
                  >
                    •••
                  </Button>
                </Box>
                <Typography
                  variant="h2"
                  sx={{
                    color: card.color,
                    fontWeight: "bold",
                    mb: 1,
                    fontSize: "3rem",
                  }}
                >
                  {card.value}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.text.primary, mb: 1 }}
                >
                  {card.subtitle}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {card.completed}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* GitHub Issues Summary */}
      <Card
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[2],
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 4,
            }}
          >
            <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
              {t("githubIssuesSummary") || "Github Issues Summary"}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Chip
                label={t("thisWeek") || "This Week"}
                size="small"
                sx={{
                  backgroundColor: theme.palette.success.main,
                  color: "white",
                }}
              />
              <Chip
                label={t("lastWeek") || "Last Week"}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: theme.palette.text.secondary,
                  color: theme.palette.text.secondary,
                }}
              />
            </Box>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary, mb: 2 }}
              >
                {t("newVsClosed") || "New vs. Closed"}
              </Typography>
              <Box
                sx={{
                  height: 300,
                  backgroundColor: theme.palette.secondary.main,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ color: theme.palette.text.secondary }}>
                  {t("chartPlaceholder") || "Chart Placeholder"}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary, mb: 3 }}
              >
                {t("overview") || "Overview"}
              </Typography>
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: theme.palette.success.main,
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  214
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {t("newIssues") || "New Issues"}
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: theme.palette.info.main,
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  75
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {t("closed") || "Closed"}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Dashboard;
