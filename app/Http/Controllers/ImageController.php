<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ImageController extends Controller
{
    public function changeImage(Request $request)
    {
	    // dd($request->all());
	    if($request->hasFile('file')) {
			$newImage = $request->file('file');
			$filename = date("Y-m-d_").$newImage->getClientOriginalName();
			if($newImage->getClientOriginalExtension() != 'svg'){
				$image = Image::make($newImage);
		        $image->save(public_path('/img/'.$filename));
			}else{
			    \File::copy($newImage, public_path('/img/'.$filename));
			    // $request->file->move(public_path('images'), $filename);
			}

			return response(['new_image' => $filename], 200);
		}
    }
}
