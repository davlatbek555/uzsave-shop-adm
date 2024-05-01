import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from "antd";
import { useDeleteRequest } from './request';
const { confirm } = Modal;


function useDeleteModal(){
    const deleteRequest = useDeleteRequest()
    return (deleteUrl, reload) => (
        confirm({
            title: 'Rostan ham o\'chirishni istaysizmi?',
            icon: <ExclamationCircleFilled/>,
            content: 'Ba\'zi tavsiflar',
            okText: 'Ha',
            okType: 'danger',
            cancelText: 'Yo\'q',
            async onOk(){
                await deleteRequest.request({url: deleteUrl})
                reload()
            },
            onCancel(){
                console.log('Cancel');
            },
        })
    )
}

export default useDeleteModal