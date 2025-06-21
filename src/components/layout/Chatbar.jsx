
import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
  IconButton,
  TextField,
  InputAdornment,
  Badge,
  Paper,
} from "@mui/material";
import {
  Message as MessageIcon,
  Close as CloseIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const users = [
  {
    id: "1",
    name: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true,
    lastMessage: "Hey there!",
    unreadCount: 2,
  },
  {
    id: "2",
    name: "Jane Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true,
    lastMessage: "How are you?",
  },
  {
    id: "3",
    name: "Mike Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: false,
    lastMessage: "See you tomorrow",
  },
  {
    id: "4",
    name: "Sarah Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true,
    lastMessage: "Thanks!",
  },
  {
    id: "5",
    name: "David Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true,
    unreadCount: 1,
  },
  {
    id: "6",
    name: "Emily Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: false,
  },
  {
    id: "7",
    name: "Chris Miller",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true,
  },
  {
    id: "8",
    name: "Lisa Anderson",
    avatar: "/placeholder.svg?height=40&width=40",
    isOnline: true,
    unreadCount: 3,
  },
];

const dummyMessages = [
  {
    id: "1",
    userId: "1",
    text: "Hey there! How are you doing?",
    timestamp: new Date(Date.now() - 300000),
    isOwn: false,
  },
  {
    id: "2",
    userId: "1",
    text: "I was wondering if you could help me with the project",
    timestamp: new Date(Date.now() - 240000),
    isOwn: false,
  },
  {
    id: "3",
    userId: "1",
    text: "Sure, I can help you with that!",
    timestamp: new Date(Date.now() - 180000),
    isOwn: true,
  },
  {
    id: "4",
    userId: "1",
    text: "Great! When would be a good time to discuss?",
    timestamp: new Date(Date.now() - 120000),
    isOwn: false,
  },
  {
    id: "5",
    userId: "1",
    text: "How about tomorrow at 2 PM?",
    timestamp: new Date(Date.now() - 60000),
    isOwn: true,
  },
];

const ChatBar = ({ collapsed, onToggle, isRTL, t }) => {
  const theme = useTheme();
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleUserClick = (user) => {
    setSelectedUser(user);
    if (collapsed) {
      onToggle();
    }
  };

  const handleClose = () => {
    setSelectedUser(null);
    onToggle();
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedUser) {
      const message = {
        id: Date.now().toString(),
        userId: selectedUser.id,
        text: newMessage,
        timestamp: new Date(),
        isOwn: true,
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box
      sx={{
        width: collapsed ? 60 : 320,
        flexShrink: 0,
        position: "fixed",
        right: isRTL ? "auto" : 0,
        left: isRTL ? 0 : "auto",
        top: 0,
        height: "100vh",
        backgroundColor: theme.palette.primary.main,
        borderLeft: !isRTL ? `1px solid ${theme.palette.divider}` : "none",
        borderRight: isRTL ? `1px solid ${theme.palette.divider}` : "none",
        transition: "width 0.3s ease",
        zIndex: 1200,
        display: "flex",
        flexDirection: "column",
        direction: isRTL ? "rtl" : "ltr",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: theme.palette.success.main,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: 64,
          flexShrink: 0,
        }}
      >
        {collapsed ? (
          <IconButton onClick={onToggle} sx={{ color: "white", mx: "auto" }}>
            <MessageIcon />
          </IconButton>
        ) : (
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <MessageIcon sx={{ color: "white" }} />
              <Typography
                variant="h6"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                {selectedUser
                  ? selectedUser.name
                  : t("teamChat") || "Team Chat"}
              </Typography>
            </Box>
            <IconButton onClick={handleClose} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </>
        )}
      </Box>

      {/* Content - Scrollable */}
      <Box
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {collapsed ? (
          // Collapsed view - User avatars only
          <Box
            sx={{
              p: 1,
              overflowY: "auto",
              "&::-webkit-scrollbar": { width: "6px" },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: theme.palette.divider,
                borderRadius: "3px",
              },
            }}
          >
            {users.map((user) => (
              <Box
                key={user.id}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 1,
                  cursor: "pointer",
                  p: 0.5,
                  borderRadius: 1,
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
                onClick={() => handleUserClick(user)}
              >
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: user.isOnline
                        ? theme.palette.success.main
                        : theme.palette.text.disabled,
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      border: `2px solid ${theme.palette.primary.main}`,
                    },
                  }}
                >
                  <Avatar
                    src={user.avatar}
                    alt={user.name}
                    sx={{ width: 32, height: 32 }}
                  />
                </Badge>
              </Box>
            ))}
          </Box>
        ) : selectedUser ? (
          // Chat view
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            {/* Messages - Scrollable */}
            <Box
              sx={{
                flexGrow: 1,
                overflowY: "auto",
                p: 2,
                "&::-webkit-scrollbar": { width: "6px" },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: theme.palette.divider,
                  borderRadius: "3px",
                },
              }}
            >
              {messages
                .filter((msg) => msg.userId === selectedUser.id)
                .map((message) => (
                  <Box
                    key={message.id}
                    sx={{
                      display: "flex",
                      justifyContent: message.isOwn
                        ? isRTL
                          ? "flex-start"
                          : "flex-end"
                        : isRTL
                          ? "flex-end"
                          : "flex-start",
                      mb: 2,
                    }}
                  >
                    <Paper
                      sx={{
                        p: 1.5,
                        maxWidth: "70%",
                        backgroundColor: message.isOwn
                          ? theme.palette.success.main
                          : theme.palette.info.main,
                        color: "white",
                      }}
                    >
                      <Typography variant="body2">{message.text}</Typography>
                      <Typography
                        variant="caption"
                        sx={{ opacity: 0.7, display: "block", mt: 0.5 }}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </Typography>
                    </Paper>
                  </Box>
                ))}
            </Box>

            {/* Message input */}
            <Box
              sx={{
                p: 2,
                borderTop: `1px solid ${theme.palette.divider}`,
                flexShrink: 0,
              }}
            >
              <TextField
                fullWidth
                size="small"
                placeholder={t("typeMessage") || "Type a message..."}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleSendMessage}
                        size="small"
                        sx={{ color: theme.palette.success.main }}
                      >
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: theme.palette.action.hover,
                    "& fieldset": { borderColor: theme.palette.divider },
                    "&:hover fieldset": {
                      borderColor: theme.palette.text.secondary,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.success.main,
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: theme.palette.text.primary,
                  },
                }}
              />
            </Box>
          </Box>
        ) : (
          // User list view
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <List
              sx={{
                flexGrow: 1,
                overflowY: "auto",
                p: 0,
                "&::-webkit-scrollbar": { width: "6px" },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: theme.palette.divider,
                  borderRadius: "3px",
                },
              }}
            >
              {users.map((user) => (
                <ListItem key={user.id} disablePadding>
                  <ListItemButton
                    onClick={() => handleUserClick(user)}
                    sx={{
                      "&:hover": {
                        backgroundColor: theme.palette.action.hover,
                      },
                    }}
                  >
                    <ListItemAvatar>
                      <Badge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot"
                        sx={{
                          "& .MuiBadge-badge": {
                            backgroundColor: user.isOnline
                              ? theme.palette.success.main
                              : theme.palette.text.disabled,
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            border: `2px solid ${theme.palette.primary.main}`,
                          },
                        }}
                      >
                        <Avatar src={user.avatar} alt={user.name} />
                      </Badge>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          sx={{ color: theme.palette.text.primary }}
                        >
                          {user.name}
                        </Typography>
                      }
                      secondary={
                        user.lastMessage && (
                          <Typography
                            variant="caption"
                            sx={{ color: theme.palette.text.secondary }}
                          >
                            {user.lastMessage}
                          </Typography>
                        )
                      }
                    />
                    {user.unreadCount && (
                      <Badge
                        badgeContent={user.unreadCount}
                        color="error"
                        sx={{ "& .MuiBadge-badge": { fontSize: "0.75rem" } }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            {/* Empty state */}
            <Box
              sx={{
                p: 3,
                textAlign: "center",
                borderTop: `1px solid ${theme.palette.divider}`,
                flexShrink: 0,
              }}
            >
              <MessageIcon
                sx={{ fontSize: 48, color: theme.palette.text.disabled, mb: 2 }}
              />
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                {t("selectContact") ||
                  "Select a contact to start a conversation."}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ChatBar;
