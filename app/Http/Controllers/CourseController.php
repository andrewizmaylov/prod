<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
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
            'title' => 'required',
            'subtitle' => 'required',
            'description' => 'required',
        ]);

        if($data) {
            $course = Course::create($data);
            
            return response(['message' => 'New Course was created', 'last_insert_id' => $course->id], 201);
        }

    }

    /**
    * return all the Courses existed in database for this moment
    */
    public function get()
    {
        return Course::all();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show($id, Course $course)
    {
        $course = Course::find($id);
        $statments = $course->statments;
        $chapters = $course->chapters;
        $lessonsCount = 0;
        $duration = 0;
        foreach ($chapters as $chapter) {
            $lessons = $chapter->lessons;
            $lessonsCount += $lessons->count();
            $durations = $lessons->pluck('duration');

            $sum = strtotime('00:00:00');
            $sum2=0;  
            foreach ($durations as $v){
                $sum1 = strtotime($v)-$sum;
                $sum2 = $sum2+$sum1;
            }

            $timeForChapter = $sum + $sum2;

            $fulltime = date("H:i:s", $timeForChapter);
            $time = explode(':', $fulltime);
            $duration += ($time[0]*60) + ($time[1]) + ($time[2]/60);
        }
            
        return [$statments, $chapters, $lessonsCount, $duration];

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function edit(Course $course)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request, Course $course)
    {
        $row = Course::find($id);
        $row->update($request->all());
        $row->save();
        return response(['message' => 'Course was updated', 'last_insert_id' => $row->id], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy(Course $course)
    {
        //
    }
}
