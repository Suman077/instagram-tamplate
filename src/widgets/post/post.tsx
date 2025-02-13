"use client"
import { useEffect, useState } from "react"
  import { useDispatch, useSelector } from "react-redux"
  import { MoreHorizontal, ChevronLeft, ChevronRight, MessageCircle, Send, Bookmark } from "lucide-react"
  import { postApi } from "@/entities/post/api/post-api"
  import ProfileUser from "@/shared/ui/profile-user"
  

   export default function Post(){
   return( <>
        {posts.map((post: Post) => (
          <div key={post.postId} className="flex flex-col w-full max-w-[468px] m-auto font-sans">
            <div className="flex items-center p-3 gap-2">
              <ProfileUser userNickname={post.userName} img={post.userImage} />
              <button className="ml-auto">
                <MoreHorizontal />
              </button>
            </div>

              {post.images.length >  (
              <div className="absolute flex justify-between w-1/2 top-1/2 transform -translate-y-1/2 px-2">
               <button className="text-white text-4xl">
                  <ChevronLeft />
                </button>
                <button className="text-white text-4xl">
                  <ChevronRight />
                </button>
              </div>
            )}

            <div className="flex items-center p-3 gap-4">
             <MessageCircle className="cursor-pointer" />
              <Send className="cursor-pointer" />
              <Bookmark className="ml-auto cursor-pointer" />
            </div>

            <div className="px-3 pb-3">
              <p className="font-semibold">{post.postLikeCount} отметок "Нравится"</p>
              <p>
                <span className="font-semibold">{post.userName}</span> {post.content}
              </p>
              {post.content && post.content.length >  (
                <button>
                  ... ещё
                </button>
              )}
              <button>
                Посмотреть все комментарии 
              </button>
            </div>
          </div>
        ))}
       
      </>
    )
  
   }