let reviewBtn = document.getElementById('reviewButton');

reviewBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let reviewRows = document.getElementById('reviewsRow');
    let name = document.getElementById("reviewName").value;
    let title = document.getElementById('reviewTitle').value;
    let comment = document.getElementById('reviewText').value;
    name = name || 'Anonymous';

    let template = `<div class="col col-lg-4 col-md-6 py-3">
                        <div class="card h-100">
                            <div class="card-body">
                                <h4 class="card-title">${title}</h4>
                                <blockquote class="blockquote mb-0">
                                    <p>${comment}</p>
                                    <footer class="text-end blockquote-footer"><i>${name}</i></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>`;
    reviewRows.innerHTML += template;
});