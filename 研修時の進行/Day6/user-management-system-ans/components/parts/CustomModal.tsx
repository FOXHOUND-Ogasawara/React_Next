import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

interface CustomModalProps {
  open: boolean;
  title: string;
  content: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
}

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  title,
  content,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        <Box sx={{ mt: 2 }}>{content}</Box>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={onClose} sx={{ mr: 2 }}>
            キャンセル
          </Button>
          {onConfirm && (
            <Button variant="contained" color="primary" onClick={onConfirm}>
              確認
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
