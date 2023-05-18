import React from 'react'
import ReactModal from 'react-modal'
import WalkingMedals from './WalkingMedals'
import RunningMedals from './RunningMedals'
import CyclingMedals from './CyclingMedals'
import goBack from '../Icons/goBack.svg'

const MedalsModal = ({
    isOpen,
    setOpen
}) => {
    const closeModal = () => {
        setOpen(false);
    }
    return (
        <ReactModal
            isOpen={isOpen}
            style=
            {{
                overlay: { backgroundColor: '#00000078' },
                content: {
                    borderRadius: '20px',
                    margin: 'auto',
                    height: '503px',
                    width: '750px',
                    padding: '20px',
                    paddingTop: '20px',
                    overflow: 'hidden'
                },
            }}
            ariaHideApp={false}
        >
            <img src={goBack} id='go-back-icon' onClick={() => closeModal()}></img>
            <WalkingMedals />
            <RunningMedals />
            <CyclingMedals />
        </ReactModal>
    )
}

export default MedalsModal