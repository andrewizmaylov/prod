<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Statment;
use Illuminate\Http\Request;

class StatmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'definition' => 'required',
            'description' => 'required',
        ]);

        if($data) {
            $data['course_id'] = Course::first()->id;
            Statment::create($data);
            
            return response(['message' => 'New Statment was created'], 201);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Statment  $statment
     * @return \Illuminate\Http\Response
     */
    public function show(Statment $statment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Statment  $statment
     * @return \Illuminate\Http\Response
     */
    public function edit(Statment $statment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Statment  $statment
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request, Statment $statment)
    {
        $row = Statment::find($id);
        $row->update($request->all());
        $row->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Statment  $statment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Statment $statment)
    {
        //
    }
}
