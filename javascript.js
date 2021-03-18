// for funny text inside all of the boxes lol
// if you put something in here, it's going to put that inside all of the boxes idk why i was bored
// if you make it too long its gonna shape the checkerboard so uh ugh h u h h hnudd h
let text = ""

//Start of writing html
document.write(`
<div class="flexbox">
    <table>
`)
for (let i = 0; i < 4; i++) { //making the checkerboard
    document.write(`
<tr>
    <td class="color2">`+text+`</td><td class="color1">`+text+`</td><td class="color2">`+text+`</td><td class="color1">`+text+`</td><td class="color2">`+text+`</td><td class="color1">`+text+`</td><td class="color2">`+text+`</td><td class="color1">`+text+`</td>
</tr>
<tr>
    <td class="color1">`+text+`</td><td class="color2">`+text+`</td><td class="color1">`+text+`</td><td class="color2">`+text+`</td><td class="color1">`+text+`</td><td class="color2">`+text+`</td><td class="color1">`+text+`</td><td class="color2">`+text+`</td>
</tr>
`)
}
document.write(`
    </table>
</div>
`)
