import React, { useState } from 'react'
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { GoogleLogin } from 'react-google-login';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import Discover from './Sidebar/Discover';
import SuggestedAccount from './Sidebar/SuggestedAccount';
import Footer from './Sidebar/Footer';

const Sidebar = () => {

  const [ showSidebar, setShowSidebar ] = useState(true);

  const userProfile = false;

  const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded text-[#55E2FE]';


  return (
    <div>
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-xl"
        onClick={() => setShowSidebar(prev => !prev)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl">
                  <AiFillHome/>
                </p>
                <span className="text-xl hidden xl:block">
                  For You
                </span>
              </div>
            </Link>  
          </div>
          {!userProfile && (
            <div className="px-2 py-4 hidden xl:block">
              <p className="text-gray-400">
                Log in to continue using
              </p>
              <div className="pr-4">
                <GoogleLogin
                  clientId=""
                  render={(renderProps)=>(
                    <button 
                      className="cursor-pointer bg-white text-lg text-[#55E2FE] border-[1px] border-[#55E2FE] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#55E2FE]"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Log in
                    </button>
                  )}
                  onSuccess={() => {}}
                  onFailure={() => {}}
                  cookiePolicy='single_host_origin'
                />
              </div>
            </div>
          )}

          <Discover/>
          <SuggestedAccount/>
          <Footer/>
        </div>
      )}
    </div>
  )
}

export default Sidebar