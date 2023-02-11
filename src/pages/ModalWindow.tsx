import { Box, Modal } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type ModalWindowPropsType = {
  open: boolean;
  onClose: () => void;
  image: string;
};

const ModalWindow: React.FC<ModalWindowPropsType> = ({
  open,
  onClose,
  image,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img src={'http://contest.elecard.ru/frontend_data/' + image} />
      </Box>
    </Modal>
  );
};

export default ModalWindow;
