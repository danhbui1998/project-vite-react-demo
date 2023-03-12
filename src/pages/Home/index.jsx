import React, { useState } from 'react';
import ListCourse from '../../components/ListCourse';
import Modal from '../../components/Modal';

const Home = () => {
    const [isShowModal, setIsShowModal] = useState(false);

    const showModal = () => {
        setIsShowModal(true);
    };
    const hideModal = () => {
        setIsShowModal(false);
    };
    return (
        <div>
            <button className="px-2 py-4 mt-5 mb-5 bg-[#eee]" onClick={showModal}>
                Show Modal
            </button>
            <Modal visbile={isShowModal} onCancel={hideModal} maskCloseable>
                Modal1
            </Modal>
            {/* <ListCourse /> */}
        </div>
    );
};

export default Home;
