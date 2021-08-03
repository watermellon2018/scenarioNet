import React, { FC } from 'react';
import { Dialog, Button, DialogTitle, Paper, DialogContent, DialogActions } from '@material-ui/core';
import Draggable from 'react-draggable';

interface WDialogI {
    isOpen?: boolean;
    closeDialog?: () => void;
    title?: string;
    handleCancel?: () => void;
    handleOk?: () => void;
    cancelTitle?: string;
    okTitle?: string;
}


const PaperComponent = (props: any) => {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

const WDialog: FC<WDialogI> = ({
    isOpen = false,
    closeDialog = () => {},
    title = '',
    children,
    handleCancel = () => {},
    handleOk = () => {},
    cancelTitle = "Закрыть",
    okTitle = "Сохранить"
}) => {

    return (

        <Dialog
                open={isOpen}
                onClose={closeDialog}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >

                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    {title}
                </DialogTitle>

                <DialogContent>

                    {children}

                </DialogContent>

                <DialogActions>

                    <Button onClick={handleOk} color="primary">
                        {okTitle}
                    </Button>
                    <Button autoFocus onClick={handleCancel} color="primary">
                        {cancelTitle}
                    </Button>

                </DialogActions>

            </Dialog>
    )
}

export default WDialog;