import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrackCard from './TrackCard';
import { useAuth } from '../../../../AuthContext';

const ScrapTrack = (props) => {

  const { onClose, isVisible, noTrackData, isLoading, setIsLoading,
    setScrapTrackData, scrapTrackData, fetchScrapTrackData, setMesaage, setError } = props

  const { user, getUser } = useAuth();

  useEffect(() => {
    getUser().then((response) => fetchScrapTrackData(response.dept_code));
  }, [])

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center lg:w-full ">
        <div className="bg-white w-5/6 h-5/6 animate1  overflow-y-auto rounded-2xl p-4">
          <div className="flex items-center justify-between px-6">
            <div className="text-lg pt-2 mt-2">Your Pending Scrap Requests: </div>
            <button
              className="text-black text-lg border-2 border-black px-2 place-self-end"
              style={{ borderRadius: "50%" }}
              onClick={() => onClose()}
            >
              X
            </button>
          </div>
          <div>
            <div className="mt-6 flex flex-col justify-center items-center gap-10">

              {noTrackData ? (
                <div>No data</div>
              ) : scrapTrackData.length > 0 ? (
                scrapTrackData.map((data) => {
                  return (
                    <TrackCard
                      data={data}
                      user={user}
                      setMessage={setMesaage}
                      setError={setError}
                      onClose={onClose}
                      setIsLoading={setIsLoading}
                      fetchScrapTrackData={fetchScrapTrackData}
                      getUser={getUser}
                    />
                  )
                })
              ) : (
                <div>No Pending Data</div>
              )}
            </div>
          </div>

        </div>

      </div>


    </>
  )
}

export default ScrapTrack