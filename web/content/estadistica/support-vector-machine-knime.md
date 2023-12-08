---

template: post

title: How to use Support Vector Machine in Knime Analytics

description: Learn how to use Support Vector Machine in Knime Analytics: assumptions, basic node setup, confusion matrix interpretation, and data normalization.

date: 2023-06-03 14:46

author: iagovar

---

<center>
<button onclick="showVideos()">Show Videos about this topic</button>
<div id="myVideos" style="display: none; padding: 1em 0;">

<iframe width="560" height="315" src="https://www.youtube.com/embed/ny1iZ5A8ilA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br><br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Q7vT0--5VII" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</div>
</center>

<script type="text/javascript">
function showVideos() {
  var x = document.getElementById("myVideos");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>

## Assumptions

Support Vector Machines (SVMs) are versatile machine learning algorithms that can work with both linear and non-linear data. They assume that the data is well-separated into different classes, and that there are clear boundaries between these classes. SVMs can handle both continuous and categorical data.

When it comes to the target variable, SVMs work best with binary classification problems. However, they can be adapted to handle multi-class classification problems as well. Finally, it is important to note that SVMs can be sensitive to outliers, so it may be necessary to remove or adjust outliers in the data before using this algorithm.

## Basic Node Setup

- Loading Data (There are multiple nodes for this).
- [Partitioning Node](https://nodepit.com/node/org.knime.base.node.preproc.partition.PartitionNodeFactory): We need to split our data into training and testing data. This is important to avoid overfitting the model to the training data and ensure that the model can generalize to new data.
- [SVM Learner](https://nodepit.com/node/org.knime.base.node.mine.svm.learner.SVMLearnerNodeFactory2) node to train your model on the training data.
- [SVM Predictor](https://nodepit.com/node/org.knime.base.node.mine.svm.predictor2.SVMPredictorNodeFactory) node to apply the trained model to the testing data and generate predictions.
- [Scorer](https://nodepit.com/node/org.knime.base.node.mine.scorer.accuracy.AccuracyScorer2NodeFactory) (Confusion Matrix): Evaluates model performance. It also comes with Accuracy metrics.

## More about SVMs

- [SVMs in 2022 ¿Why still taught?](https://www.reddit.com/r/MachineLearning/comments/twqel5/discussion_support_vector_machines_in_2022/)

- [FreeCodeCamp about SVMs](https://www.freecodecamp.org/news/svm-machine-learning-tutorial-what-is-the-support-vector-machine-algorithm-explained-with-code-examples/)