let url =
  "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple";
fetch(url).then(res => res.json()).then(data => {
    // Đáp án đúng của câu hỏi thứ nhất.
    console.log(data.results[0].correct_answer);
    // Những đáp án sai của câu hỏi thứ hai.
    console.log(data.results[1].incorrect_answers);
    // Câu hỏi (dạng text) của câu hỏi thứ ba.
    console.log(data.results[2].question);
    // Những đáp án sai của câu hỏi thứ tư (nếu có).
    console.log(data.results[3]. incorrect_answers)
    // Câu hỏi (dạng text) của câu hỏi thứ năm (nếu có).
    console.log(data.results[4].question)

});
