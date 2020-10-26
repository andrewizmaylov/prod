<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;
    protected $fillable = ['number', 'title', 'description', 'url', 'duration', 'chapter_id'];

    public function chapter()
    {
    	return $this->belongsTo(Chapter::class);
    }

}
