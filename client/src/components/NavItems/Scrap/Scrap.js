import React, { useEffect, useState } from 'react'
import Table from './Table';
import axios from 'axios';
import { useAuth } from '../../../AuthContext';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import ScrapTrack from './Track/ScrapTrack';
import ScrapApprove from './Approve/ScrapApprove';
import ScrapRequest from './Request/ScrapRequest';

const Scrap = () => {

    const [stockData, setStockData] = useState([]);
    const [itemData, setItemData] = useState([]);

    const [showTrackScrap, setShowTrackScrap] = useState(false);
    const [showScrapApprove, setShowScrapApprove] = useState(false);
    const [showScrap, setShowScrap] = useState(false);

    const navigate = useNavigate();

    const { user, getUser } = useAuth();


    const fetchStockData = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/getAdminStockData");
            setStockData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetItemData = async()=>{
        try{
            const response = await axios.get("http://localhot:4000/api/getItems");
            setItemData(response.data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        if (!Cookies.get("token")) {
            navigate("/");
        } else {
            getUser();
            fetchStockData();
        }
    }, [Cookies.get("token")])


    return (
        <>
            <div className='pt-10 pl-8'>
                <div className='text-2xl flex justify-between '>
                    <h2 className=' whitespace-nowrap'>Scrap Stocks:</h2>
                    <div className=' flex flex-wrap pr-10 gap-5'>
                        <div
                            className="bg-blue-500 animate1 whitespace-nowrap hover:bg-blue-700 text-white text-sm h-10 py-2 px-4 rounded w-42"
                            onClick={() => setShowTrackScrap(true)}
                        >
                            Track Your Request
                        </div>
                        <div
                            className="bg-blue-500 animate1 whitespace-nowrap hover:bg-blue-700 text-white text-sm h-10 py-2 px-4 rounded w-42"
                            onClick={() => setShowScrapApprove(true)}
                        >
                            Approve Request
                        </div>
                        <div
                            className="bg-blue-500 animate1  whitespace-nowrap hover:bg-blue-700 text-white h-10 text-sm  py-2 px-6 rounded w-42"
                            onClick={() => setShowScrap(true)}
                        >
                            Scrap
                        </div>
                    </div>
                </div>
                <div className='pt-10'>
                    <h4>Your scap history:</h4>
                    <div className=' flex justify-center pt-10'>
                        <Table scrapData={stockData} />
                    </div>
                </div>
            </div>
            <ScrapTrack 
                isVisible ={showTrackScrap}
                onClose ={()=>setShowTrackScrap(false)}
            />
            <ScrapApprove 
                isVisible = {showScrapApprove}
                onClose ={()=>setShowScrapApprove(false)}
            />
            <ScrapRequest 
                isVisible ={showScrap}
                onClose ={()=>setShowScrap(false)}
                user={user}
            />

        </>
    )
}

export default Scrap