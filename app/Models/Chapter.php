<?php

namespace App\Models;

use App\Models\Lesson;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'description', 'course_id'];

    public function lessons()
    {
    	return $this->hasMany(Lesson::class);
    }

    public function course()
    {
    	return $this->belongsTo(Course::class);
    }
}
